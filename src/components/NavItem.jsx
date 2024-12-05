import Link from 'next/link'

const SubMenu = ({ subMenu }) => (
  <ul className="gnb__depth2">
      {subMenu.map((subItem, subIndex) => (
          <li key={subIndex}>
              <Link href={subItem.link}>{subItem.title}</Link>
          </li>
      ))}
  </ul>
)

export const NavItem = ({item}) => (
  <li>
      <Link href={item.link}>
          <span>{item.title}</span>
      </Link>
      {item.subMenu && <SubMenu subMenu={item.subMenu} />}
  </li>
)
