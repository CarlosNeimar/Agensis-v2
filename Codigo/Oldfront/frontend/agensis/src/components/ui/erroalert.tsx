interface AlertDestructiveProps {
    Errotitle: string;
    errodescription: string;
}

export function AlertDestructive({ Errotitle, errodescription }: AlertDestructiveProps) {
    return (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
            <p className="font-bold">{Errotitle}</p>
            <p>{errodescription}</p>
        </div>
    );
}
