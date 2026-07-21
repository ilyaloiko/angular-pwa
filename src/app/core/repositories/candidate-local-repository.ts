import { inject, Service } from '@angular/core';
import { LocalDatabase } from '../database/local-database';
import { Candidate } from '../models/candidate.model';

@Service()
export class CandidateLocalRepository {
  private readonly db = inject(LocalDatabase);

  getAll(): Promise<Candidate[]> {
    return this.db.candidates.toArray();
  }

  get(id: number) {
    return this.db.candidates.get(id);
  }

  create(candidate: Candidate) {
    return this.db.candidates.add(candidate);
  }

  update(id: number, candidate: Partial<Candidate>) {
    return this.db.candidates.update(id, candidate);
  }

  delete(id: number) {
    return this.db.candidates.delete(id);
  }
}
