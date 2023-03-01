<script>
  function mycallback(data) {

    console.log(data.feed.title);
  
  }
  function StartFeedsExtraction() {
    let ScriptObj = document.createElement(&#39;script&#39;);

  let FeedsUrl =&#39;https://mentasana-aldia.blogspot.com/feeds/posts/default?alt=json-in-script&amp;callback=mycallback&#39;;
  ScriptObj.src =FeedsUrl ;
           document.body.appendChild(ScriptObj); }
  StartFeedsExtraction();
</script>