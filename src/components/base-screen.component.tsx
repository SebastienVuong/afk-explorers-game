interface IBaseScreenProps {
  children: React.ReactNode
}

export const BaseScreen = ({ children }: IBaseScreenProps) => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "black" }}>
      {children}
    </div>
  )
}