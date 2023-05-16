import * as React from "react"
import style from '../style/styles.css'


export default function Home() {
  return (
  <div className="centerAlign">
    <script type="text/javascript">
        (function() {
        var didInit = false;
            function initMunchkin() {
                if(didInit === false) {
                didInit = true;
                Munchkin.init('132-PNL-231');
                }
            }
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = '//munchkin.marketo.net/munchkin.js';
            s.onreadystatechange = function() {
                if (this.readyState == 'complete' || this.readyState == 'loaded') {
                initMunchkin();
                }
            };
            s.onload = initMunchkin;
            document.getElementsByTagName('head')[0].appendChild(s);
        })();
    </script>
    <script src="https://assets.adoberesources.net/loader.js?orgId=5278CEFB5717428A7F000101%40AdobeOrg&instanceId=psenablement&env=prod&geo=va7"></script>
    <h1>Welcome to GatsbyJS example site!</h1>
    <p>We are happy that you are exploring Gatsby and want to learn or use GatsbyJS for your site development.</p>
  </div>
    
  )
}
