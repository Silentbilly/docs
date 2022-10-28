---
sidebar_position: 19
sidebar_label: Passing rate summary
---

# Passing rate summary

Shows the percentage ratio of Passed test cases to Total test cases for set of launches.

>**Note:**
> Total test cases = Passed + Not Passed, while Not Passed = Failed + Skipped + Interrupted
> 
> Thus, Passing rate = Passed / (Passed + Failed + Skipped + Interrupted)

**Widget's parameters:**

- Filter: At least one filter is required

- Items: 1-600. The default meaning is 50.

- Mode: Bar View/Pie View

- Widget name: any text

- Description: any text

Please find below an example of configuration:

![Image](img/widget-types/PassingRateSummary1.png)

![Image](img/widget-types/PassingRateSummary2.png)

**Widget view**

The widget can be displayed in two options as shown on the pictures below:

Bar View

![Image](img/widget-types/PassingRateSummary3.png)

Pie view

![Image](img/widget-types/PassingRateSummary4.png)

As you can see, this widget was built based on the “regression” filter.

![Image](img/widget-types/PassingRateSummary5.png)

The tooltip on mouse hover over chart area shows the quantity of Passed/Not passed test cases and percentage ratio of Passed/Not passed test cases to Total test cases for the specified set of launches.

![Image](img/widget-types/PassingRateSummary6.png)

The widget has clickable sections. When you click on a specific section in the widget, the system forwards you to the launches view for the appropriate selection.

Thanks to “Passing rate summary” widget, it is no longer needed to spend time on calculating Passing rate of the specified set of launches. ReportPortal provides these statistics as a visualization – it is a quick and convenient decision. You can take the screenshot of widget and use it in the Test results report.

>**Note:**
The widget doesn't contain 'IN PROGRESS" launches.