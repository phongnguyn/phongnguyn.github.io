export default function Title() {
    return (
        <div className="text-9xl">
          <svg viewBox="0 0 960 300"> 
            <symbol id="s-text">
              <text textAnchor="middle" x="50%" y="80%">John Nguyen</text>
            </symbol>
            <g className="g-ants">
              <use href="#s-text" style={{fill: 'none', stroke: '#fff', strokeDasharray: '6% 29%', strokeWidth: '2px', strokeDashoffset: '0%', animation: 'anim 5.5s infinite linear'}} />
              <use href="#s-text" style={{fill: 'none', stroke: '#f25f5c', strokeDasharray: '6% 29%', strokeWidth: '2px', strokeDashoffset: '0%', animation: 'anim 5.5s infinite linear', animationDelay: '-1s'}} />
              <use href="#s-text" style={{fill: 'none', stroke: '#f25f5c', strokeDasharray: '6% 29%', strokeWidth: '2px', strokeDashoffset: '0%', animation: 'anim 5.5s infinite linear', animationDelay: '-2s'}} />
              <use href="#s-text" style={{fill: 'none', stroke: '#247ba0', strokeDasharray: '6% 29%', strokeWidth: '2px', strokeDashoffset: '0%', animation: 'anim 5.5s infinite linear', animationDelay: '-3s'}} />
              <use href="#s-text" style={{fill: 'none', stroke: '#247ba0', strokeDasharray: '6% 29%', strokeWidth: '2px', strokeDashoffset: '0%', animation: 'anim 5.5s infinite linear', animationDelay: '-4s'}} />
              <use href="#s-text" style={{fill: 'none', stroke: '#ffe066', strokeDasharray: '6% 29%', strokeWidth: '2px', strokeDashoffset: '0%', animation: 'anim 5.5s infinite linear', animationDelay: '-5s'}} />
            </g>
          </svg>
        </div>
      );
}