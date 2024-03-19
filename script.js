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
      <a class="dropdown-item" href="eip.html">
        EIP系統
      </a>
    </li>
  </ul>
</li>`

function loadNavbar() {
  navbar.innerHTML = navText;
}

loadNavbar();