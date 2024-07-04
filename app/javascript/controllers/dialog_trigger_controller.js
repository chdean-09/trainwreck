import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dialog-trigger"
export default class extends Controller {
  static values = { target: String }

  launch() {
    let dialog = document.getElementById(this.targetValue);
    if (dialog) {
      let modalController = this.application.getControllerForElementAndIdentifier(dialog, "dialog");
      modalController.open();
    }
  }
}
