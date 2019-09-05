import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../partenaire.service';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.scss']
})
export class PartenaireComponent implements OnInit {

  constructor(private partService : PartenaireService) { }

  ngOnInit() {

  }


}
