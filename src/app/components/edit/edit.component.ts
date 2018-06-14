import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit {

  public titulo = "Santa";
  public autor = "Federico Gamboa";
  public descripcion = "Santa fue publicado en 1903 por el escritor mexicano Federico Gamboa.";
  public precio = 300;

  constructor() { }

  ngOnInit() { }

}
