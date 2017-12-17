constructor() { }
import { Injectable } from '@angular/core';
import * as localStorageDB from 'localstoragedb';

@Injectable()
export class LocalstorageService {

  let nameColums = [
    'user',
    'idCaese',
    'noOrder',
    'customerName',
    'customerID',
    'caseDate',
    'caseStatus',
    'caseDescription',
    'tracking'
  ]

  constructor() { }

}
