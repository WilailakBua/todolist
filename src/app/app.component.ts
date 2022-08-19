import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'testAngular';
  valueChecked: any;
  checked: any;
  editValue: any;
  oldName: any;
  newName: any;
  isDisable = true;
  constructor(){}

  data = [
    {
      "id": 1, "name": "apple", "value": "apple", "checked": "true"
    },
    {
      "id": 2, "name": "banana", "value": "banana", "checked": "false"
    },
    {
      "id": 3, "name": "watermelon", "value": "watermelon", "checked": "false"
    },
    {
      "id": 4, "name": "durian", "value": "durian", "checked": "false"
    },
    {
      "id": 5, "name": "sapodilla", "value": "sapodilla", "checked": "false"
    },
    {
      "id": 6, "name": "rambeh", "value": "rambeh", "checked": "false"
    },
  ]
  ngOnInit() {

  }

  setAll(completed: boolean) {
    this.valueChecked = completed;
  }

  onClickAdd() {
    this.data.push({ "id": this.data.length, "name": this.checked, "value": this.checked, "checked": this.valueChecked })
  }

  onClickDelete(id: number) {
    this.data.forEach((element, index) => {
      if (id === element.id) {
        this.data.splice(index, 1);
      }
    });
  }

  onClickEdit(id: number, name: string) {
    console.log('id ', id, 'name ', name);
    this.oldName = name;
    this.newName = name;
    this.editValue = id;
    console.log('editValue ', this.editValue);
    this.isDisable = false;


  }

  onClickSave() {
    this.data.forEach(element => {
      console.log(element);
      if(this.oldName === element.name){
        element.name = this.newName;
      }

      this.isDisable = true;
      
    });
  }

}
