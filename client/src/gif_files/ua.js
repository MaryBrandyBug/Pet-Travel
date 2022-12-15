/*######## Установка и парсинг рекламы Google Adsense 1.2 - 01.02.2017  ###################################################*/

(function() {

 
 
   var userLevel=parseFloat(GetCookie ('_c4_users_level'));
   if (userLevel>0){
      $('[role="advertizing_left"]').remove();
      $('[role="advertizing_bottom"]').remove();
      $('[role="advertizing"]').remove();
      $('[role="advertizing2"]').remove();
      return;
   }




	var yandexAd=function(){      
      $('body').addClass('__ads __yads');
      
      window.yaContextCb=window.yaContextCb||[];
 
      /*
       * 99.Десктоп.Левый баннер (ID блока: R-A-402065-1)
       * 99.Десктоп.Верхний горизонтальный (ID блока: R-A-402065-2)
       * 99.Десктоп.Нижний горизонтальный (ID блока: R-A-402065-4)
       * 99.Десктоп.Баннер в элементах (ID блока: R-A-402065-7)
       * 
       * 99.Мобильный.Верхний (ID блока: R-A-402065-3)
       * 99.Мобильный.Средний (ID блока: R-A-402065-5)
       * 99.Мобильный.Нижний (ID блока: R-A-402065-6)
       * 
       * */
       
      var sets=$('.photo2_list');
      sets.each(function(){
      	var $set=$(this);
      	if (!$set.parents().hasClass('panel')){ //Элементы не в панелях

            var $items=$set.find('.photo2_list_items>DIV');
            var itemsCount=$items.length;
            var isElement=$('.element').length>0;
            
            if (itemsCount && !isElement){
               $items.each(function(idx){              
                  if (idx>(itemsCount/2)){
						//if (0==idx%7){
                     $(this).after('<div class="photo2_tmb" role="advertizing_items" style="width: 477px; height: 290px; margin-bottom: 10px; "><a class="photo2_tmb_img_o"><img class="photo2_tmb_img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" width="537" height="330" ></a></div>');   
                     return false;
                  }
               })
            }
            
         }
         
         
      
      });

       

 
      var render=(DomId,BlockId)=>window.yaContextCb.push(()=>{
         Ya.Context.AdvManager.render({
            renderTo: DomId,
            blockId:	 BlockId
         })
      })    

      $.getScript("https://yandex.ru/ads/system/context.js",function(){   
         if (MOB){
         
            $('[role="advertizing"]')			.html('<div id="yandex_rtb_R-A-402065-3"></div>');
            $('[role="advertizing_items"]')	.html('<div id="yandex_rtb_R-A-402065-5"></div>');
            $('[role="advertizing_bottom"]')	.html('<div id="yandex_rtb_R-A-402065-6"></div>');

            render('yandex_rtb_R-A-402065-3','R-A-402065-3'); //99.Мобильный.Верхний (ID блока: R-A-402065-3)
            render('yandex_rtb_R-A-402065-5','R-A-402065-5'); //99.Мобильный.Средний (ID блока: R-A-402065-5)
            render('yandex_rtb_R-A-402065-6','R-A-402065-6'); //99.Мобильный.Нижний (ID блока: R-A-402065-6)      
            
         }else{
         
            $('[role="advertizing_left"]')	.html('<div id="yandex_rtb_R-A-402065-1"></div>');
            $('[role="advertizing"]')			.html('<div id="yandex_rtb_R-A-402065-2"></div>');
            $('[role="advertizing_bottom"]')	.html('<div id="yandex_rtb_R-A-402065-4"></div>');
            $('[role="advertizing_items"]')	.html('<div id="yandex_rtb_R-A-402065-7"></div>');
            
            render('yandex_rtb_R-A-402065-1','R-A-402065-1'); //99.Десктоп.Левый баннер (ID блока: R-A-402065-1)
            render('yandex_rtb_R-A-402065-2','R-A-402065-2'); //99.Десктоп.Верхний горизонтальный (ID блока: R-A-402065-2)
            render('yandex_rtb_R-A-402065-4','R-A-402065-4'); //99.Десктоп.Нижний горизонтальный (ID блока: R-A-402065-4)            
            render('yandex_rtb_R-A-402065-7','R-A-402065-7'); //99.Десктоп.Баннер в элементах (ID блока: R-A-402065-7)
            
         }

      })
   }



   var googleAd=function(){
      $('body').addClass('__ads __gads');
      
      /*######## Google Feed ###################################################*/
      // 
      var code_top='<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-5306303895924240" data-ad-slot="9744244814" data-ad-format="auto"></ins>';
      var code_top2='<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-5306303895924240" data-ad-slot="3980209864" data-ad-format="auto"></ins>';
      var code_fw='<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-5306303895924240" data-ad-slot="3980209864" data-full-width-responsive="true" data-ad-format="auto"></ins>';
      var code_left='<ins class="adsbygoogle" style="display:inline-block;width:240px;height:400px" data-ad-client="ca-pub-5306303895924240" data-ad-slot="6651177618"></ins>';
      var code_bottom='<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-5306303895924240" data-ad-slot="6976760419" data-ad-format="auto"></ins>';

      var code_middle='<div class="it-adblk it-adblk-middle" role="advertizing_middle"><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-5306303895924240" data-ad-slot="3980209864" data-ad-format="auto"></ins></div>';
      var code_related='<div class="it-adblk it-adblk-related" role="advertizing_related"><ins class="adsbygoogle" style="display:block" data-ad-format="autorelaxed" data-ad-client="ca-pub-5306303895924240" data-ad-slot="7858401197"></ins></div>';


      var activate_advert=function(){
         (adsbygoogle = window.adsbygoogle || []).push({
         });
      }

      var activate_dom=function(){



         if (MOB){
            $('[role="advertizing_left"]').remove();

            if ($('[data-scope-element]').size()>0){//Элемент

               $('[data-scope-element] ._content').after($('[role="advertizing"]'));
               $('[data-scope-element] .element_data_wrapper').after($('[role="advertizing_bottom"]'));

            }else{
               if ($('[role="content-wrapper"] .photo2_list').size()>0){//Есть списки на странице

                  $advert_clone=$('[role="advertizing"]').clone();
                  $advert_clone2=$('[role="advertizing"]').clone();
                  $('[role="advertizing"]').remove();

                  $advert_clone2.attr('role','advertizing2');

                  var $list=$('[role="content-wrapper"] .photo2_list');
                  var items_count=$list.find('.photo2_tmb').size();

                  var index1=Math.round(Math.random()*items_count/2);
                  var index1=0;
                  var index2=Math.round(items_count/2+Math.random()*items_count/2);
                  var index3=Math.round(items_count/3+Math.random()*items_count/3);

                  //console.log(items_count);

                  $list.find('.photo2_tmb').eq(index1).after($advert_clone);               
                  $list.find('.photo2_tmb').eq(index3).after($advert_clone2);               

               }
            }


            //Другие страницы
            $('[role="advertizing"]')			.html(code_top2);
            $('[role="advertizing2"]')			.html(code_top);
            $('[role="advertizing_bottom"]')	.html(code_bottom);

         }else{ //Десктоп
            $('[role="advertizing_left"]')	.html(code_left);
            $('[role="advertizing"]')			.html(code_top2);
            $('[role="advertizing_bottom"]')	.html(code_bottom);
         }
         //console.log('dom created'); 
      }

      $(function(){  
         //      activate_dom();

         $.getScript("//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",function(){      
            /* $('.adsbygoogle').each(function(){
            activate_advert();
         });*/
            (adsbygoogle = window.adsbygoogle || []).push({
               google_ad_client: "pub-5306303895924240",
               enable_page_level_ads: true
            });

            /*
         function(){
            var e=document.createElement("script");
            e.type="text/javascript",
               e.async=!0,
               e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
            var a=document.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(e,a)
         }();
*/

            //  console.log('script loaded');      
         });
      });
  }
  
  
  

 //  if (navigator.language=="ru-RU"){
      yandexAd();
  // } else{
   //   googleAd();
  // }
 
})();

