### Web Security

#### Most Vulnerability
1. XSS (Cross-Site Scripting) Injection
    ..1. Logged in user visits attackers page
    ..1. Attacker navigates user to a vulnerable URL
    ..1. Script runs, attacker gets access to user session

1. CSRF (Cross-Site request forgery), XS-leaks (Insufficient isolation)
    ..1. Logged in user visits attackers page
    ..1. Attacker send cross-origin request to vulnerable URL
    ..1. Attacker takes action on behalf of user, or infers information about the user's data in the vulnerable app


#### Solution
1. use CSP (Content Security Policy) Lv. 3
    ..1. CSP is a strong defense-in-depth mechanism against XSS
    ..1. Developers can control which (script get executed & plugins are loaded)
    ..1. Enabling CSP on response header (Enforcement: Content-Security-Policy & Report Only: Content-Security-Policy-Report-Only)
    ..1. Using a nonce (is a randomly generated token that should be used only one time)
    ..1. Creating Trusted Types

1. use same origin rather than cross-site & use CORS
    ..1. set Sec-Fetch-Site & Sec-Fetch-Mode response header
