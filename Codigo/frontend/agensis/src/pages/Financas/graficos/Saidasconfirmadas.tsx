import { TrendingDown, TrendingUp, Loader2 } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useTransacoes } from "@/hooks/useTransacoes";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const chartConfig = {
  total: {
    label: "Total",
    color: "hsl(var(--chart-5))", // Usando chart-4 para saídas confirmadas
  },
} satisfies ChartConfig;

export function SaidasConfirmadas() {
  const { loading, error, processarSaidasPorMes, calcularVariacaoMensalSaidas, transacoes, buscarTransacoes } = useTransacoes();
  const chartData = processarSaidasPorMes();
  const variacao = calcularVariacaoMensalSaidas();

  if (loading) {
    return (
      <Card className="w-full h-[400px] flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="w-full h-[400px]">
        <CardContent className="pt-6">
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
          <Button onClick={() => buscarTransacoes()} className="mt-4">
            Tentar novamente
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (!transacoes.length) {
    return (
      <Card className="w-full h-[400px]">
        <CardContent className="pt-6">
          <Alert>
            <AlertDescription>
              Nenhuma transação encontrada.
              <p>Cadastre uma nova transação para visualizar os dados.</p>
            </AlertDescription>
          </Alert>
          <Button onClick={() => buscarTransacoes()} className="mt-4">
            Tentar novamente
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (!chartData.length) {
    return (
      <Card className="w-full h-[400px]">
        <CardContent className="pt-6">
          <Alert>
            <AlertDescription>
              Nenhuma saída encontrada. Verifique se:
              <ul className="list-disc pl-4 mt-2">
                <li>Existem transações do tipo 'saída'</li>
                <li>As transações têm status 'concluido'</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Saídas Confirmadas</CardTitle>
        <CardDescription>
          Mostrando as saídas dos últimos meses
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 12,
              bottom: 12,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `R$${value.toLocaleString()}`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
              formatter={(value: number) => [`R$ ${value.toLocaleString()}`, " Total"]}
            />
            <Area
              dataKey="total"
              type="monotone"
              fill="hsl(var(--chart-5))"
              fillOpacity={0.4}
              stroke="hsl(var(--chart-5))"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              {variacao > 0 ? (
                <>
                  Crescimento de {variacao.toFixed(1)}% este mês
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </>
              ) : (
                <>
                  Queda de {Math.abs(variacao).toFixed(1)}% este mês
                  <TrendingDown className="h-4 w-4 text-red-500" />
                </>
              )}
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {chartData.length > 0 && `${chartData[0].month} - ${chartData[chartData.length - 1].month} ${new Date().getFullYear()}`}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
