import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class ChatMessagesComponent extends Component {
  constructor(owner, args) {
    super(owner, args);
  }

  @action createEl(el) {
    // set from and to
    el.from = this.args.from;
    el.to = this.args.to;
  }
}
