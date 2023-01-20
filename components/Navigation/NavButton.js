export default function NavButton(props){
  return(
        <a href={props.href}
            className="m-4 hover:scale-105 duration-100">
            <p className="text-sm px-3 py-1">{props.title}</p>
        </a>
  );
};