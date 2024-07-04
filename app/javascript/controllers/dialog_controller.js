import { Controller } from "@hotwired/stimulus"
import { enter, leave } from "el-transition"

// Connects to data-controller="dialog"
export default class extends Controller {
  static targets = [ "menu" ]
  open() {
    this.element.classList.remove('hidden')
  }
  close() {
    this.element.classList.add('hidden');
  }
  escClose(event) {
    if (event.keyCode == 27) this.close()
  }
}
