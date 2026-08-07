import { Service } from '@angular/core';
import { Candidate } from '../models/candidate.model';
import { addDoc, collection, deleteDoc, doc, getDocs, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

@Service()
export class CandidateRepository {
  private candidates = collection(db, 'candidates');

  async getList(): Promise<Candidate[]> {
    return getDocs(this.candidates).then((snap) => {
      return snap.docs.map<Candidate>((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        } as Candidate;
      });
    });
  }

  async getOne(id: string): Promise<Candidate | undefined> {
    const snapshot = await getDoc(doc(this.candidates, id));

    if (!snapshot.exists()) {
      return undefined;
    }

    return {
      id: snapshot.id,
      ...snapshot.data(),
    } as Candidate;
  }

  async create(candidate: Candidate) {
    return await addDoc(this.candidates, candidate);
  }

  async update(id: string, data: Partial<Candidate>): Promise<void> {
    return await updateDoc(doc(this.candidates, id), data);
  }

  async delete(id: string): Promise<void> {
    return await deleteDoc(doc(this.candidates, id));
  }
}
