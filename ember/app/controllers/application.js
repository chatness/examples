import Controller from "@ember/controller";

export default class ApplicationController extends Controller {
  from = {
    name: "John Doe",
    objectId: "5EOJTH9nUzM526vKPSVrHzp2zFP2",
    email: "john@doe.com",
  };
  to = {
    objectId: "4e1cda1f-4adf-2fce-f303-83f497ce25c9",
    name: "Developers",
  };
}
