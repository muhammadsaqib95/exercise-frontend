import React, { useRef } from 'react';
 import  { Editor } from '@tinymce/tinymce-react';
const allowedExt  =  ['jpg', 'jpeg', 'png', 'gif', 'svg'];
 export default function TextEditor({setvalue}) {
   const editorRef = useRef(null);
   const log = () => {
     if (editorRef.current) {
       console.log(editorRef.current.getContent());
     }
   };
    const handleEditorChange = (content) => {
      // console.log('Content was updated:', content);
      setvalue(content);
    }

   return (
     <>
       <Editor
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue=""
         init={{
          selector: '#editor',
           height: 300,
           menubar: false,
           plugins: [
            'image',
             'advlist autolink lists link charmap print preview anchor',
             'visualblocks code',
             'media table paste code help wordcount styleselect'
           ],
           toolbar: 'undo redo ' +
           ' | styles | blocks | fontfamily | fontsize ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | media  image  link | help ',
           setup: function (editor) {
            editor.ui.registry.addIcon(
              "image",
              '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">'
              +'<path d="M18.375 0C18.5512 0.055125 18.7304 0.102482 18.9033 0.166714C19.8712 0.526125 20.5606 1.45275 20.5644 2.48132C20.5769 5.93566 20.5721 9.39005 20.569 12.8444C20.5713 12.9586 20.5506 13.0722 20.5081 13.1783C20.4656 13.2844 20.4022 13.3808 20.3217 13.4619C20.2411 13.543 20.1451 13.607 20.0393 13.6502C19.9335 13.6934 19.8201 13.7149 19.7058 13.7133C19.2205 13.7089 18.8585 13.3256 18.8582 12.8007C18.8562 9.73011 18.8559 6.65964 18.8571 3.58929C18.8571 3.29464 18.8577 3 18.8571 2.70536C18.8556 2.04857 18.5247 1.71466 17.8719 1.71455C14.2389 1.71413 10.606 1.71413 6.97318 1.71455C5.545 1.71455 4.11684 1.71466 2.6887 1.71488C2.04921 1.7153 1.71477 2.049 1.71471 2.68832C1.71414 7.74936 1.71414 12.8104 1.71471 17.8715C1.71471 18.5246 2.04889 18.8573 2.70509 18.8573C6.06127 18.8578 9.41746 18.8581 12.7737 18.8582C13.4487 18.8585 13.8813 19.4318 13.6566 20.0195C13.5239 20.3666 13.2102 20.5704 12.7915 20.571C11.5151 20.5729 10.2387 20.5731 8.96229 20.5718C6.91821 20.5718 4.87414 20.5718 2.83007 20.5718C1.30489 20.5718 0.415875 19.8857 0.0336429 18.4149C0.0293571 18.3995 0.0114107 18.3881 0 18.375V2.19643C0.0192857 2.13954 0.0431786 2.08393 0.0572143 2.02559C0.240375 1.26541 0.664446 0.680946 1.35632 0.315589C1.61871 0.176786 1.91539 0.103286 2.19643 0H18.375Z" fill="black"/>'
              +'<path d="M19.5 24C19.0014 23.7844 18.8277 23.4039 18.8494 22.8684C18.8799 22.1135 18.8571 21.3564 18.8571 20.5714C18.4446 20.5714 18.0551 20.5714 17.6655 20.5714C17.2105 20.5714 16.7555 20.5768 16.3006 20.5696C15.8024 20.5619 15.4267 20.1849 15.4295 19.7088C15.4322 19.2305 15.8061 18.8624 16.31 18.8588C17.1472 18.8535 17.9845 18.8573 18.8571 18.8573V18.5576C18.8571 17.8172 18.8543 17.0768 18.8581 16.3364C18.8609 15.8117 19.2216 15.4319 19.7092 15.4293C20.1958 15.4267 20.5671 15.8079 20.5701 16.3276C20.5747 17.1568 20.5713 17.986 20.5713 18.8572H20.835C21.5219 18.8572 22.2096 18.8786 22.8954 18.8503C23.4223 18.8289 23.79 19.0136 24 19.5V19.9286C23.7904 20.4123 23.4245 20.603 22.8988 20.5778C22.3216 20.55 21.7422 20.5714 21.1637 20.5714H20.5714C20.5714 21.3709 20.551 22.1357 20.5784 22.8987C20.5973 23.4245 20.412 23.7902 19.9285 24H19.5Z" fill="black"/>'
              +'<path d="M7.70775 12.4889C8.874 11.3289 10.0193 10.1902 11.1639 9.0509C11.5181 8.6983 11.8677 8.34119 12.2246 7.99126C12.6107 7.61256 13.1019 7.60555 13.4844 7.9859C14.6673 9.16308 15.8462 10.3443 17.0209 11.5295C17.0845 11.5878 17.1258 11.6665 17.1376 11.7519C17.144 13.5359 17.1426 15.3198 17.1426 17.1232H3.44058C3.43672 17.0429 3.42911 16.9571 3.42906 16.8714C3.42836 15.2116 3.43104 13.5517 3.42488 11.8917C3.42051 11.8133 3.43393 11.7348 3.46413 11.6622C3.49434 11.5897 3.54054 11.5249 3.59931 11.4727C3.88436 11.2029 4.15474 10.9177 4.43208 10.6397C4.91422 10.1564 5.36727 10.1522 5.84513 10.6299C6.40059 11.1851 6.95502 11.7413 7.50842 12.2985C7.5705 12.3608 7.63559 12.42 7.70775 12.4887" fill="black"/>'
              +'<path d="M7.72364 3.42936C8.14704 3.4312 8.56041 3.55846 8.91152 3.79509C9.26263 4.03171 9.53575 4.36709 9.69636 4.75884C9.85698 5.1506 9.8979 5.58117 9.81395 5.99617C9.73 6.41117 9.52495 6.79198 9.2247 7.09051C8.92444 7.38904 8.54245 7.59189 8.12697 7.67345C7.7115 7.755 7.28117 7.7116 6.89035 7.54872C6.49952 7.38585 6.16573 7.1108 5.93113 6.75833C5.69654 6.40586 5.57166 5.99177 5.57227 5.56836C5.57298 5.28662 5.6292 5.00779 5.73772 4.74778C5.84624 4.48778 6.00493 4.25171 6.20472 4.05307C6.40452 3.85442 6.6415 3.6971 6.90212 3.59008C7.16275 3.48306 7.4419 3.42845 7.72364 3.42936" fill="black"/>'
              +'</svg>'
            );
           },
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
           image_title: true, 
           // enable automatic uploads of images represented by blob or data URIs
           automatic_uploads: true,
           // add custom filepicker only to Image dialog
           file_picker_types: 'image',

           file_picker_callback: function(callback, value, meta) {
            var input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
        
            input.onchange = function() {
              var file = this.files[0];
              if(allowedExt.includes(file.type.split('/')[1])){
              var reader = new FileReader();
              reader.onload = function () {
                var id = 'blobid' + (new Date()).getTime();
                var blobCache = window.tinymce.activeEditor.editorUpload.blobCache;
                var base64 = reader.result.split(',')[1];
                var blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);
        
                // call the callback and populate the Title field with the file name
                callback(blobInfo.blobUri(), { title: file.name });
              };
              reader.readAsDataURL(file);
            }else{
              alert('Only images are allowed');
            }
            };
            
            input.click();

            
            // Provide file and text for the link dialog
          //   if (meta.filetype == 'file') {
          //     callback('mypage.html', {text: 'My text'});
          //   }
        
          //   // Provide image and alt text for the image dialog
          //   if (meta.filetype == 'image') {
          //     callback('myimage.jpg', {alt: 'My alt text'});
          //   }
        
          //   // Provide alternative source and posted for the media dialog
          //   if (meta.filetype == 'media') {
          //     callback('movie.mp4', {source2: 'alt.ogg', poster: 'image.jpg'});
          //   }
          }
         }}
         apiKey="k6trya3ncncme42v7kg0p1yjm1xbfv3xl1t0jhvmy32cvfac"
          onEditorChange={handleEditorChange}
         
       />

       {/* <button onClick={log}>Log editor content</button> */}
     </>
   );
 }