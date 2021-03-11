### 10 Modern layout in 1 line CSS without media queries
1. Super Centered (place-items: center)
    ```css
        .parent {
            display: grid;
            place-items: center;
        }
    ```
1. The Deconstructed (flex: 0 1 <baseWidrh>)
    ```css
        .parent {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .box {
            flex: 1 1 150px; /*Streching */
            flex: 0 1 150px; /*No Streching */
            margin: 5px;
        }
    ```

1.  Sidebar Says (grid-template-columns: minmax(<min>, <max>)...)
    ```css
        .parent {
            display: grid;
            grid-template-columns: minmax(150px, 25%) auto;
        }
    ```

1. Pancake Stack (grid-template-rows: auto 1fr auto)
    ```css
        .parent {
            display: grid;
            grid-template-rows: auto 1fr auto;
        }
    ```

1. Classic Holy Grail Layout (grid-template: auto 1fr auto / auto 1fr auto)
    ```css
        .parent {
            display: grid;
            grid-template: auto 1fr auto / auto 1fr auto;
        }

        .header {
           padding: 2rem;
           grid-column: 1 / 4; 
        }

        .left-side {
            grid-column: 1 / 2;
        }

        .main {
            grid-column: 2 / 3;
        }

        .right-side {
            grid-column: 3 / 4;
        }

        .footer {
            grid-column: 1 / 4;
        }

    ```

1. 12-Span Grid (grid-template-coumns: repeat(12, 1fr))
    ```css
        .parent {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
        }

        .span-12 {
            grid-column: 1 / 13;
        }

        .span-6 {
            grid-column: 1 / 7;
        }

        .span-4 {
            grid-column: 4 / 9;
        }

        .span-2 {
            grid-column: 3 / 5;
        }
    ```

1. RAM-Repeat,Auto, MinMax(grid-template-columns: repeat(auto-fit, minmax(<base>, 1fr)))
    ```css
        .parent {
            display: grid;
            grid-gap: 1rem;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        }
    ```

1. Clamping My Style (clamp(<min>, <actual>, <max>))
    ```css
        .parent {
            display: grid;
            place-items: center;
        }

        .card {
            width: clamp(23ch, 50%, 46ch);
            display: flex;
            flex-direction: column;
            padding: 1rem;
        }
    ```

1. Respect for Aspect (aspect-ration: <width> / <height>)
    ```css
        .parent {
            display: grid;
            place-items: center;
        }

        .visual {
            aspect-ratio: 16 / 9;
        }

        .card {
            width: 50%;
            display: flex;
            flex-direction: column;
        }
    ```

#### Source
[https://1linelayouts.glitch.me/](https://1linelayouts.glitch.me/)