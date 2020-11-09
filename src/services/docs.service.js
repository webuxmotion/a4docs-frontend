import BaseHttpService from './base-http.service';
import queryString from 'query-string';

export default class DocsService extends BaseHttpService {
  fetchDocs({ personal, search}) {
    const queryObj = {};

    if (personal.length) {
      queryObj.personal = personal;
    }

    if (search.length) {
      queryObj.search = search;
    }

    const queryStr = queryString.stringify(queryObj);
    return this.get('docs' + (queryStr ? `?${queryStr}` : ''));
  }

  fetchDoc(id) {
    return this.get(`docs/${id}`);
  }

  async deleteDoc(id) {
    await this.delete(`docs/${id}`);
  }

  updateDocPersonal(id, personal) {
    return this.patch(`docs/${id}/personal`, { personal });
  }

  updateDoc(id, title, content) {
    return this.patch(`docs/${id}`, { title, content });
  }

  createDoc(title, content) {
    return this.post(`docs`, { title, content });
  }
}
