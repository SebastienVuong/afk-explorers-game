interface IBaseScreenProps {
  children: React.ReactNode
}

export const BaseScreen = ({ children }: IBaseScreenProps) => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "lightgrey", padding: "20px", height: "100%", width: "100%" }}>
      {children}
    </div>
  )
}