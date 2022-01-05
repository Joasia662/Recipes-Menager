import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthorInfoComponent } from '../../shared/dialogs/author-info/author-info.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(  private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onAuthorInfoClick(){
    const dialogRef = this.dialog.open(AuthorInfoComponent);
  }

}
