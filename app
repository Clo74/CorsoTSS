      List<Customer> customer = manager.searchCustormer(scr);
        
        wr.println("<h1>Risultato ricerca</h1>");
        wr.println("<ul>");
        customer.forEach(c -> wr.println("<li>" + c.getName() + "</li>"));
        wr.println(("</ul"));
 
