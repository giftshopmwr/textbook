const navbar = document.querySelector('[data-navbar]');
const navText = `
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    財務
  </a>
  <ul class="dropdown-menu">
    <li>
      <a class="dropdown-item" href="Invoice.html">
        支請單
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="cashAdvance.html">
        預支單
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="smallCash.html">
        零用金
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="itemGet.html">
        物品申請單
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="salary.html">
        臨時薪資單
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="shift.html">
        人員排班表
      </a>
    </li>
  </ul>
</li>
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    資訊
  </a>
  <ul class="dropdown-menu">
    <li>
      <a class="dropdown-item" href="sap.html">
        SAP系統
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="pos.html">
        POS系統
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="eip.html">
        EIP系統
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="blueStar.html">
        藍星金流
      </a>
    </li>
    <li>
      <a class="dropdown-item" href="outlook.html">
        Outlook 信箱
      </a>
    </li>
  </ul>
</li>
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    總務
  </a>
  <ul class="dropdown-menu">
    <li>
      <a class="dropdown-item" href="consignment.html">
        物品託運與借用
      </a>
    </li>
  </ul>
</li>
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    水陸法會
  </a>
  <ul class="dropdown-menu">
    <li>
      <a class="dropdown-item" href="event.html">
        水陸法會文件
      </a>
    </li>
  </ul>
</li>
`

function loadNavbar() {
  navbar.innerHTML = navText;
}

loadNavbar();