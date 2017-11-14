export  interface ICase {
    _idCaese?: number;
    _noOrder: number;
    _customerName: string;
    _customerID: string;
    _caseDate: Date;
    _caseStatus: string;
    _caseDescription: string;
    _tracking?: [
        {
            _trackingDate: Date;
            _description: string;
        }
    ];


};