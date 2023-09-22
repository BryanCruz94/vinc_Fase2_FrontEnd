// INTERFAZ ECU911
export interface ResultObject {
    robo: number,
    emergenciaMedica: number,
    incendio: number,
    desastreNatural: number,
    accidenteDeTrafico: number,
    sinIncidente: number,
    otros: number
};

export interface Transaction {
    item: string;
    cost: unknown;
    year: string;
}

export interface categoria {
    title: string;
    sector: string;
    category: string;
    img: string;
    imgPop: String;
    atencion: String;
    contacto: String;
    correo: String;
    ubicacion: String;
}

export interface datos {
    name: string;
    range: string;
    gmail: String;
    url: String;
}

export interface mes {
    name: string;
    num: string;
}

export interface dia {
    num: string;
}

//INTERFAZ INCIDENTES UNIDADES EDUCATIVAS
export interface ResultObject_UE {
    robo: number,
    acosoSexual: number,
    bullyng: number,
    alcoholDrogas: number,
    violenciaPares: number,
    otros: number,
    sinIncidente: number,
    pandillas: number,
    total: number

};

export interface TransactionUE {
    item: string;
    cost: unknown;
    year: string;
};