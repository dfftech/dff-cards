import { Component } from "@angular/core";

@Component({
  selector: "dff-root",
  template: `

<div style="display: flex; flex-direction: row">
  <div style="width: 20%; height: 100vh; overflow: auto">
    <h4> DFF CARDS DEMO </h4>
    <hr />
    <ul> 
    <li> <a routerLink="/card-demo01" routerLinkActive="active">card-demo01</a> </li>
    <li> <a routerLink="/card-demo02" routerLinkActive="active">Animation contact form</a> </li>
    <li> <a routerLink="/card-demo03" routerLinkActive="active">card-demo03</a> </li>
    <li> <a routerLink="/card-demo04" routerLinkActive="active">card-demo04</a> </li>
    <li> <a routerLink="/card-demo05" routerLinkActive="active">card-demo05</a> </li>
    <li> <a routerLink="/card-demo06" routerLinkActive="active">Simple Contact Form</a> </li>
    <li> <a routerLink="/card-demo07" routerLinkActive="active">Full Screen Menu</a> </li>
    <li> <a routerLink="/card-demo08" routerLinkActive="active">card-demo08</a> </li>
    <li> <a routerLink="/card-demo09" routerLinkActive="active">card-demo09</a> </li>
    <li> <a routerLink="/card-demo10" routerLinkActive="active">card-demo10</a> </li>
    <li> <a routerLink="/card-demo11" routerLinkActive="active">card-demo11</a> </li>
    <li> <a routerLink="/card-demo12" routerLinkActive="active">card-demo12</a> </li>
    <li> <a routerLink="/card-demo13" routerLinkActive="active">card-demo13</a> </li>
    <li> <a routerLink="/card-demo14" routerLinkActive="active">card-demo14</a> </li>
    <li> <a routerLink="/card-demo15" routerLinkActive="active">card-demo15</a> </li>
    <li> <a routerLink="/card-demo16" routerLinkActive="active">card-demo16</a> </li>
    <li> <a routerLink="/card-demo17" routerLinkActive="active">card-demo17</a> </li>
    <li> <a routerLink="/card-demo18" routerLinkActive="active">card-demo18</a> </li>
    <li> <a routerLink="/card-demo19" routerLinkActive="active">card-demo19</a> </li>
    <li> <a routerLink="/card-demo20" routerLinkActive="active">card-demo20</a> </li>
    <li> <a routerLink="/card-demo21" routerLinkActive="active">card-demo21</a> </li>
    <li> <a routerLink="/card-demo22" routerLinkActive="active">card-demo22</a> </li>
    <li> <a routerLink="/card-demo23" routerLinkActive="active">card-demo23</a> </li>
    <li> <a routerLink="/card-demo24" routerLinkActive="active">card-demo24</a> </li>
    <li> <a routerLink="/card-demo25" routerLinkActive="active">card-demo25</a> </li>
    <li> <a routerLink="/card-demo26" routerLinkActive="active">card-demo26</a> </li>
    <li> <a routerLink="/card-demo27" routerLinkActive="active">card-demo27</a> </li>
    <li> <a routerLink="/card-demo28" routerLinkActive="active">card-demo28</a> </li>
    <li> <a routerLink="/card-demo29" routerLinkActive="active">card-demo29</a> </li>
    <li> <a routerLink="/card-demo30" routerLinkActive="active">card-demo30</a> </li>
    <li> <a routerLink="/card-demo31" routerLinkActive="active">card-demo31</a> </li>
    <li> <a routerLink="/card-demo32" routerLinkActive="active">card-demo32</a> </li>
    <li> <a routerLink="/card-demo33" routerLinkActive="active">card-demo33</a> </li>
    <li> <a routerLink="/card-demo34" routerLinkActive="active">card-demo34</a> </li>
    <li> <a routerLink="/card-demo35" routerLinkActive="active">card-demo35</a> </li>
    <li> <a routerLink="/card-demo36" routerLinkActive="active">card-demo36</a> </li>
    <li> <a routerLink="/card-demo37" routerLinkActive="active">card-demo37</a> </li>
    <li> <a routerLink="/card-demo38" routerLinkActive="active">card-demo38</a> </li>
    <li> <a routerLink="/card-demo39" routerLinkActive="active">card-demo39</a> </li>
    <li> <a routerLink="/card-demo40" routerLinkActive="active">card-demo40</a> </li>
    <li> <a routerLink="/card-demo41" routerLinkActive="active">card-demo41</a> </li>
    <li> <a routerLink="/card-demo42" routerLinkActive="active">card-demo42</a> </li>
    <li> <a routerLink="/card-demo43" routerLinkActive="active">card-demo43</a> </li>
    <li> <a routerLink="/card-demo44" routerLinkActive="active">card-demo44</a> </li>
    <li> <a routerLink="/card-demo45" routerLinkActive="active">card-demo45</a> </li>
    <li> <a routerLink="/card-demo46" routerLinkActive="active">card-demo46</a> </li>
    <li> <a routerLink="/card-demo47" routerLinkActive="active">card-demo47</a> </li>
    <li> <a routerLink="/card-demo48" routerLinkActive="active">card-demo48</a> </li>
    </ul>
  </div>

  <div style="width: 80%; overflow-y: auto" align="center">
  
      <router-outlet></router-outlet>


  </div>

</div>





  `,
  styles: [``]
})
export class AppComponent {
  title = "dff-cards";

  constructor() {}
}
