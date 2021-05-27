import './App.css';
import { Home } from './containers/Home'
import $ from 'jquery';
import { useEffect } from 'react';
import './globalStyles.css';

function App() {

  useEffect(() => {
    let $animationElement = $('.animationElement');
    let $window = $(window);
    let windowHeight = $window.height();
    let windowTopPosition = $window.scrollTop();
    let windowBottomPosition = (windowTopPosition + windowHeight);
    $.each($animationElement, function () {
      let $element = $(this);
      let elementHeight = $element.outerHeight();
      let elementTopPosition = $element.offset().top;
      let elementBottomPosition = (elementHeight + elementTopPosition);

      if ((elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition)) {
        $element.addClass('inView');
      }
    })
  }, []);

  useEffect(() => {
    let $animationElement = $('.animationElement');
    let $window = $(window);
    $(window).scroll(() => {
      let windowHeight = $window.height();
      let windowTopPosition = $window.scrollTop();
      let windowBottomPosition = (windowTopPosition + windowHeight);
      $.each($animationElement, function () {
        let $element = $(this);
        let elementHeight = $element.outerHeight();
        let elementTopPosition = $element.offset().top;
        let elementBottomPosition = (elementHeight + elementTopPosition);

        if ((elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition)) {
          $element.addClass('inView');
        }
      })
    });
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
