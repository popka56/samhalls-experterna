<template>
  <div id="article">
    <div id="content">
      <h2>Lorem ipsum</h2>
      <h3>Författare: John Doe | Yrkeskategori: IT | Datum: 2020-02-27 | Senast ändrad: 2020-02-28</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Malesuada proin libero nunc consequat interdum. Lectus urna duis convallis convallis tellus. Vitae sapien pellentesque habitant 
        morbi tristique senectus et. Quisque non tellus orci ac auctor. Purus semper eget duis at tellus at urna. Suspendisse sed nisi 
        lacus sed viverra. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Egestas diam in arcu cursus euismod quis 
        viverra. Lectus sit amet est placerat in egestas erat imperdiet sed. Auctor urna nunc id cursus metus aliquam eleifend mi. 
        Elementum sagittis vitae et leo. Consequat ac felis donec et odio. Pharetra sit amet aliquam id diam. Id aliquet lectus proin 
        nibh nisl condimentum id venenatis. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Viverra maecenas 
        accumsan lacus vel facilisis volutpat. Scelerisque viverra mauris in aliquam sem fringilla ut morbi.<br><br>

        Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Tellus mauris a diam maecenas sed. Nulla at volutpat 
        diam ut venenatis tellus in metus vulputate. Duis tristique sollicitudin nibh sit amet. Amet consectetur adipiscing elit duis 
        tristique sollicitudin. Donec et odio pellentesque diam volutpat. Quis blandit turpis cursus in hac habitasse platea dictumst 
        quisque. Lacinia at quis risus sed vulputate odio ut enim blandit. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. 
        In fermentum posuere urna nec tincidunt praesent semper feugiat.<br><br>

        Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Vel orci porta non pulvinar neque laoreet. Iaculis nunc 
        sed augue lacus viverra vitae. In massa tempor nec feugiat. Porta nibh venenatis cras sed felis eget. Nisl vel pretium lectus 
        quam id leo in vitae turpis. Mattis vulputate enim nulla aliquet. Id semper risus in hendrerit gravida. Elementum curabitur 
        vitae nunc sed velit dignissim sodales ut. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Amet justo donec 
        enim diam vulputate ut pharetra. Pulvinar pellentesque habitant morbi tristique senectus et. Libero id faucibus nisl tincidunt 
        eget nullam non nisi.<br><br>

        Nunc sed augue lacus viverra. Elementum curabitur vitae nunc sed velit dignissim. Sed viverra ipsum nunc aliquet bibendum enim 
        facilisis gravida neque. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Vestibulum lorem sed risus ultricies 
        tristique nulla aliquet. Euismod quis viverra nibh cras pulvinar. Habitant morbi tristique senectus et netus et malesuada fames. 
        Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Est velit egestas dui id ornare arcu odio ut sem. Amet 
        consectetur adipiscing elit pellentesque habitant. Accumsan lacus vel facilisis volutpat est velit. Et magnis dis parturient 
        montes nascetur ridiculus mus mauris vitae. Egestas quis ipsum suspendisse ultrices gravida. Purus semper eget duis at tellus. 
        Dis parturient montes nascetur ridiculus mus mauris. Lorem dolor sed viverra ipsum nunc. Dictumst vestibulum rhoncus est 
        pellentesque elit. Nunc vel risus commodo viverra.<br><br>

        Montes nascetur ridiculus mus mauris. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Scelerisque fermentum 
        dui faucibus in ornare quam viverra. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Urna nunc id cursus metus aliquam. 
        Mi bibendum neque egestas congue quisque egestas diam. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Mollis 
        aliquam ut porttitor leo a diam sollicitudin. Ipsum consequat nisl vel pretium lectus quam id. Quam pellentesque nec nam aliquam 
        sem et tortor. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Mauris pellentesque pulvinar pellentesque habitant morbi 
        tristique. Convallis tellus id interdum velit laoreet id donec. Neque laoreet suspendisse interdum consectetur libero id faucibus. 
        Porttitor lacus luctus accumsan tortor posuere. Sed turpis tincidunt id aliquet risus feugiat.<br><br>
      </p>
    </div>
    <div id="sources">
      <h3>Källor:</h3>
      <ol>
        <li>Collins, Donald, Diane Catlett, and Bobbie Collins. Libraries and Research: A Practical Approach, 3rd ed. Dubuque. IA: Kendall/Hunt Publishing Company, 1994.</li>
        <li>Systema Dipterorum. Pape T. & Thompson F.C. (eds), 2011-01-06</li>
        <li>SpidCat: The World Spider Catalog. Platnick N.I. & Raven R.J., 2008-01-07</li>
        <li>Bisby F.A., Roskov Y.R., Orrell T.M., Nicolson D., Paglinawan L.E., Bailly N., Kirk P.M., Bourgoin T., Baillargeon G., Ouvrard D. (red.) (22 februari 2011). </li>
        <li>S.A.Graham & Gandhi, 2013 In: Harvard Pap. Bot. 18(1): 76</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  //Din javascript här
}
</script>

<style scoped>
#article{
  /*Detta är bara för att se hur det kanske ser ut sedan med vår sidebar. Ta bort när den finns!*/
  margin-right: 25vw;
}

#content h2{
  text-align: center;
}

#content h3{
    font-size: 14px;
    padding: 5px;
    text-align: center;
}

#content p{
  padding: 20px;
}

#sources{
  list-style-type: lower-roman;
}

#sources h3{
  padding-left: 20px;
}
</style>
