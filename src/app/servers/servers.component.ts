import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector:'.app-servers',
  selector:'app-servers',
  // template: `
  //           <app-server></app-server>
  //           <app-server></app-server>`,
  templateUrl : './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test server';
  userName="";
  serverCreated = false;
  servers = ['Testserver','Testserver 2']
  toggleBool = false;
  toggleBools = []

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true; 
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    
    this.serverName = (<HTMLInputElement> event.target).value;
  }

  resetNameField() {
    this.userName= "";
  }

  toggleBtn(){
    if(this.toggleBool == false)
      this.toggleBool= true;
    else
      this.toggleBool = false;

    this.toggleBools.push(new Date().getTime());
  }
}
