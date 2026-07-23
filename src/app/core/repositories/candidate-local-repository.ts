import { inject, Service } from '@angular/core';
import { LocalDatabase } from '../database/local-database';
import { Candidate } from '../models/candidate.model';

@Service()
export class CandidateLocalRepository {
  private readonly db = inject(LocalDatabase);

  getList(searchValue?: string): Promise<Candidate[]> {
    const table = this.db.candidates;

    if (!searchValue) {
      return table.toArray();
    }

    const searchValues = searchValue.trim().toLocaleLowerCase().split(' ');

    return table
      .filter((item) => {
        const candidateStr = [
          item.firstName,
          item.lastName,
          item.position,
          item.level,
          item.skills.join(' '),
        ]
          .join(' ')
          .toLocaleLowerCase();

        return searchValues.every((searchValue) => candidateStr.includes(searchValue));
      })
      .toArray();
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
