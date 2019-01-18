import { Component, OnInit } from "@angular/core";

@Component({
    selector: "dff-card-demo04",
    templateUrl: "./card-demo04.component.html",
    styleUrls: ["./card-demo04.component.css"]
})
export class CardDemo04Component implements OnInit {
    constructor() {}

    ngOnInit() {}

    inputData = {};
    outputEmitter($event: any) {
        console.log($event);
    }

    htmlContent1 = `
  <dff-card-s>
            <main style="background-color: red">
                <h2>Main content</h2>
                <p>Scroll down the page!</p>
                <h3>How to recreate this</h3>

                <h2>Main content</h2>
                <p>Scroll down the page!</p>
                <h3>How to recreate this</h3>

                <h2>Main content</h2>
                <p>Scroll down the page!</p>
                <h3>How to recreate this</h3>

                <h2>Main content</h2>
                <p>Scroll down the page!</p>
                <h3>How to recreate this</h3>

                <h2>Main content</h2>
                <p>Scroll down the page!</p>
                <h3>How to recreate this</h3>

                <h2>Main content</h2>
                <p>Scroll down the page!</p>
                <h3>How to recreate this</h3>

                <h2>Main content</h2>
                <p>Scroll down the page!</p>
                <h3>How to recreate this</h3>

                <h2>Main content</h2>
                <p>Scroll down the page!</p>
                <h3>How to recreate this</h3>

                <h2>Main content</h2>
                <p>Scroll down the page!</p>
                <h3>How to recreate this</h3>
            </main>
            <aside
                style="background-color: green"
                style="height: 200px; overflow: hidden;"
            >
                <h3>Sticky sidebar</h3>
            </aside>
        </dff-card-s>
        `;
}
