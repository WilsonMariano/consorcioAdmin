export class LiquidacionGlobal {
    
    private id : Number ;
    private mes: Number;
    private anio: Number;
    private primerVencimiento: String;
    private segundoVencimiento: String;
    private fechaEmision: String;
    private tasaInteres: Number;

    
    // CONSTRUCTOR

    public LiquidacionGlobal(id?: Number,mes?: Number, anio?: Number, primerVencimiento?: String, segundoVencimiento?: String, fechaEmision?: String, tasaInteres?: Number) {

        this.id = id;
        this.mes = mes;
        this.anio = anio;
        this.primerVencimiento = primerVencimiento;
        this.segundoVencimiento = segundoVencimiento;
        this.fechaEmision = fechaEmision; 
        this.tasaInteres = tasaInteres;
    }

    
    // GETTERS
    public getId() : Number {
        
        return this.id;
    }

    public getMes() : Number {
        
        return this.mes;
    }

    public getAnio() : Number {
        
        return this.anio;
    }

    public getPrimerVencimiento() : String {
        
        return this.primerVencimiento;
    }

    public getSegundoVencimiento () : String {
        
        return this.segundoVencimiento;
    }
    
    public getFechaEmision () : String {
        
        return this.fechaEmision;
    }

    public getTasaInteres () : Number {
        
        return this.tasaInteres;
    }

    // SETTERS

    public setId( id: Number ) {
        
        this.id = id;
    }

    public setMes( mes: Number ) {
        
        this.mes = mes;
    }

    public setAnio( anio: Number ) {
        
        this.anio = anio;
    }

    public setPrimerVencimiento( primerVencimiento: String ) {
        
        this.primerVencimiento = primerVencimiento;
    }

    public setSegundoVencimiento ( segundoVencimiento: String ) {
        
        this.segundoVencimiento = segundoVencimiento;
    }
    
    public setFechaEmision ( fechaEmision: String ) {
        
        this.fechaEmision = fechaEmision;
    }

    public setTasaInteres ( tasaInteres: Number ) {
        
        this.tasaInteres = tasaInteres;
    }

}