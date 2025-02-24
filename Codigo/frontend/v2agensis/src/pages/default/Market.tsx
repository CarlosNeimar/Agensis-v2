import { motion } from "motion/react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const Market = () => {
  return (
    <div className="h-screen w-screen max-w-full">
      <div className="text-center justify-center items-center flex flex-col">
        <h2 className="scroll-m-20 border-b pb-2 text-4xl font-semibold tracking-tight mt-12 w-1/2">
          Serviços:
        </h2>
        
        <Separator />
      </div>
    </div>
  )
}

export default Market
