type careScaleprops = {
  careType: string,
  scaleValue: any,
};
const quantityLabel : any = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}
function CareScale({ careType, scaleValue }:careScaleprops): JSX.Element {
  const range : number[] = [1, 2, 3];

  const scaleType: any = careType === "light" ? "☀️" : "💧";

  return (
    <div onClick={() =>
      alert(
        `Cette plante requiert ${quantityLabel[scaleValue]} ${
          careType === 'light' ? 'de lumière' : "d'arrosage"
        }`
      )
    }>
      {range.map((rangeElem: number) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}
export default CareScale;
