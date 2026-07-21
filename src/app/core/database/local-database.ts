import Dexie, { Table } from 'dexie';
import { Service } from '@angular/core';
import { Candidate } from '../models/candidate.model';

@Service()
export class LocalDatabase extends Dexie {
  candidates!: Table<Candidate>;

  constructor() {
    super('CandidateHub');

    this.version(1).stores({
      candidates: '++id,name,position,email,skills,favorite',
    });
  }
}
