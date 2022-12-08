
export default function LoadingWithMask() {
    return (
        <div class="spinner-border text-danger" role="status" style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            zIndex:"1",
            width: "3rem",
            height: "3rem"}}>
        <span class="sr-only">Loading...</span>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
    </div>
    )
}