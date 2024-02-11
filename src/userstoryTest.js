AND(
  ISPICKVAL(Language__c, "English"),
  ISPICKVAL(Origin, "Web"),
  OR(
    ISPICKVAL(Reason_Code_Level_1__c, "Corporate Social Responsibility"),
    ISPICKVAL(Reason_Code_Level_1__c, "Interest-based Advertising"),
    AND(
      ISPICKVAL(Reason_Code_Level_1__c, "Web Experience"),
      OR(
        ISPICKVAL(Reason_Code_Level_2__c, "Online Flyer"),
        ISPICKVAL(Reason_Code_Level_2__c, "Technical Issue")
      )
    ),
    AND(
      ISPICKVAL(Reason_Code_Level_1__c, "Pharmacy Experience"),
      OR(
        ISPICKVAL(Reason_Code_Level_2__c, "Refund or Exchange"),
        ISPICKVAL(Reason_Code_Level_2__c, "Medication Disposal")
      )
    ),
    ISPICKVAL(Reason_Code_Level_1__c, "PCID"),
    AND(
      ISPICKVAL(Reason_Code_Level_1__c, "Photo Lab"),
      OR(
        ISPICKVAL(Reason_Code_Level_2__c, "Order Status"),
        ISPICKVAL(Reason_Code_Level_2__c, "Technical Assistance")
      )
    )
  ),
  OR(
    ISPICKVAL(Banner_value__c, "Superstore"),
    CONTAINS(Origin_Website__c, "superstore")
  ),
  NOT(CONTAINS(Origin_Website__c, "atlantic"))
);
