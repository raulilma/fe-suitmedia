export default function NavButton(props){
  return(
        <a href={props.href}
            className="m-4 hover:scale-105 hover:bg-softgray duration-100 pt-2 pb-2">
            <p className="text-sm px-3 py-1">{props.title}</p>
        </a>
  );
};