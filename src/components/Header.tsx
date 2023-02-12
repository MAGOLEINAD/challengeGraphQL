import styled from '@emotion/styled'

const Heading = styled.h1`
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  padding: 20px 0px 20px 0px;
  margin: 0;
`

export function Header() {
  return (
    <Heading>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <div>$ 0</div>
    </Heading>
  );
}
