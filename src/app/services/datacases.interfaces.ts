export  interface ICase {
    _user?: string;
    _idCaese?: number;
    _noOrder: string;
    _customerName: string;
    _customerID: string;
    _caseDate: number;
    _caseStatus: string;
    _caseDescription: string;
    _tracking?: [
        {
            _trackingDate: number;
            _description: string;
            _usertrack: string;
        }
    ];


};