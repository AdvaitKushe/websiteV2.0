import { Button } from "@/components/ui/button"


function Resume() {

    return (
        <Button colorPalette = "red" variant="outline" onClick = {() => window.open("/src/files/Resume.pdf", "_blank")}> Resumé </Button>
    );

}

export default Resume;