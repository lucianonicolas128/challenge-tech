import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  public categories: boolean = true;
  public type: boolean = false;
  public tribes: boolean = false;

  public cards = [
    {
      banner: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80",
      title: "Here's the title for this piece of content.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      username: "Adam Lindeil"
    },
    {
      banner: "https://material.angular.io/assets/img/examples/shiba2.jpg",
      title: "Here's the title for this piece of content.",
      avatar: "https://images.unsplash.com/photo-1635360315270-4cb94fe4b4b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      username: "Marinam Anunobi"
    },
    {
      banner: "https://images.unsplash.com/photo-1635398500586-6d2c1887eeff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=686&q=80",
      title: "Here's the title for this piece of content.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
      username: "Linda Jackson"
    },
    {
      banner: "https://images.unsplash.com/photo-1635394053145-f628e792e4f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
      title: "Here's the title for this piece of content.",
      avatar: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=766&q=80",
      username: "Tiffany Anthony"
    },
    {
      banner: "https://images.unsplash.com/photo-1635323392268-c92c4a5776f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=655&q=80",
      title: "Here's the title for this piece of content.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
      username: "Adam Lindeil"
    }
  ]

  constructor() { 
    localStorage.setItem('title', 'Resources')
  }

  ngOnInit(): void {
  }

}
