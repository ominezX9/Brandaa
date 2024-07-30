// $(document).ready(function() {
//     $('.card_anim').each(function() {
//       const $card = $(this);
  
//       let timeout;
  
//       $card.on('mousemove', function(e) {
//         clearTimeout(timeout);
  
//         requestAnimationFrame(function() {
//           const cardWidth = $card.outerWidth();
//           const cardHeight = $card.outerHeight();
//           const offset = $card.offset();
//           const centerX = offset.left + cardWidth / 2;
//           const centerY = offset.top + cardHeight / 2;
  
//           const mouseX = e.clientX - centerX;
//           const mouseY = e.clientY - centerY;
  
//           const rotateX = -(mouseY / cardHeight) * 10; // Reduced the rotation multiplier
//           const rotateY = (mouseX / cardWidth) * 10; // Reduced the rotation multiplier
  
//           $card.css('transform', `translateX(-50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
//         });
//       });
  
//       $card.on('mouseleave', function() {
//         timeout = setTimeout(function() {
//           $card.css('transform', 'translateX(-50%) rotateX(0deg) rotateY(0deg)');
//         }, 100);
//       });
//     });
//   });
  