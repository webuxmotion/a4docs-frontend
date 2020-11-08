import { observable, action } from 'mobx';

export default class DocsStore {
  @observable docs = [];
  @observable doc = null;
  @observable filters = { personal: '', search: '' };

  constructor(docsService) {
    this.docsService = docsService;
  }

  updateFilters({ personal, search }) {
    this.filters.personal = personal;
    this.filters.search = search;
    this.fetchDocs();
  }

  @action
  resetDocs() {
    this.docs = [];
  }

  @action
  async fetchDocs() {
    const result = await this.docsService.fetchDocs(this.filters);

    if (result) {
      this.docs = result.data;
    }
  }

  @action
  async fetchDoc(id) {
    const result = await this.docsService.fetchDoc(id);

    if (result) {
      this.doc = result.data;
    }
  }

  @action
  async createDoc(title, content) {
    const result = await this.docsService.createDoc(title, content);

    if (result) {
      this.docs.push(result.data);
    }
  }

  @action
  async deleteDoc(id) {
    const idx = this.docs.findIndex(doc => doc.id === id);
    await this.docsService.deleteDoc(id);
    this.docs.splice(idx, 1);
    
    if (this.doc) {
      this.doc = null;
    }
  }

  @action
  async updateDocPersonal(id, personal) {
    const doc = this.docs.find(doc => doc.id === id);
    await this.docsService.updateDocPersonal(id, personal);
    if (doc) {
      doc.personal = personal;
    }
    if (this.doc) {
      this.doc.personal = personal;
    }
  }
}
