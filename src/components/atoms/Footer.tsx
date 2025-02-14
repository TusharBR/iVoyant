import { useDrag } from 'react-dnd';


interface FooterProps {
  content: string;
  id: string;
}

const Footer= ({ content, id }:FooterProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'FOOTER',
    item: { id, type: 'FOOTER' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div ref={drag} className={`footer ${isDragging ? 'dragging' : ''}`}>
      <p className="footer-content">{content}</p>
      <div className="footer-info">
        <span>© {new Date().getFullYear()} MyName. All rights reserved.</span>
        <span>{currentDate}</span>
      </div>
    </div>
  );
};

export default Footer;
