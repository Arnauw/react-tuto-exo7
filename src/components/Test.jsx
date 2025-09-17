import tw from "tailwind-styled-components";

const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-[200px]
    h-[200px]
    bg-indigo-600
`
export const Test = () => {
    return (
        <Container>
            <div className={"bg-amber-700"}>Test</div>
        </Container>

    )
}
