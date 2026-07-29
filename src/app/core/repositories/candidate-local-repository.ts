import { inject, Service } from '@angular/core';
import { LocalDatabase } from '../database/local-database';
import { Candidate } from '../models/candidate.model';
import { CandidateFilter } from '../../feature/candidates/pages/candidates/candidates';

@Service()
export class CandidateLocalRepository {
  private readonly db = inject(LocalDatabase);

  getList(filter?: CandidateFilter): Promise<Candidate[]> {
    const table = this.db.candidates;

    if (!filter) {
      return table.toArray();
    }

    const {search, position, level} = filter;

    const searchValues = search.trim().toLocaleLowerCase().split(' ');

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

        return searchValues.every((searchValue) => candidateStr.includes(searchValue))
          && (!position || item.position === position)
          && (!level || item.level === level);
      })
      .toArray();
  }

  get(id: number) {
    return this.db.candidates.get(id);
  }

  create(candidate: Candidate): Promise<Candidate> {
    return this.db.candidates.add(candidate);
  }

  update(id: number, candidate: Partial<Candidate>) {
    return this.db.candidates.update(id, candidate);
  }

  delete(id: number) {
    return this.db.candidates.delete(id);
  }
}
